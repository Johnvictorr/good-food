"use client";

import { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";

import { useRouter } from 'next/navigation';
import { useModalCartStore } from "@/store/modalCartStore";

interface Item {
  id: number;
  name: string;
  price: number;
  icon: string;
}

interface SearchBarProps {
  data: Item[];
  onSearch?: (results: Item[]) => void;
  className?: string;
}

export default function SearchBar({ data, onSearch, className }: SearchBarProps) {
  const router = useRouter();

  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState<Item[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { isOpen } = useModalCartStore();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const results = data.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(results);
    
    // ✅ Só mostra dropdown se o modal NÃO estiver aberto
    if (!isOpen && query.length > 0 && results.length > 0) {
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  
    onSearch?.(results);
  }, [query, data, isOpen]);

  const handleItemClick = (item: Item) => {
    setQuery("");
    setShowDropdown(false);
    onSearch?.([item]);

    router.push(`/foodSelected/${item.id}`);
  };

  return (
    <div ref={wrapperRef} className={`relative w-full ${className}`}>
      <div className="flex overflow-hidden rounded-full">
        <input
          type="search"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => {
            if (query.length > 0 && filtered.length > 0) {
              setShowDropdown(true);
            }
          }}
          className="w-full rounded-l-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 text-black focus:outline-none"
        />
        <button
          className="rounded-r-full px-3 md:px-4 cursor-pointer bg-red-600 text-white hover:text-red-600 hover:bg-white border border-l-0 border-gray-300 transition duration-100 ease-in-out"
        >
          <FaSearch size={15} />
        </button>
      </div>

      {showDropdown && (
        <ul className="absolute z-50 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-md max-h-60 overflow-y-auto">
          {filtered.map((item) => (
            <li
              key={item.id}
              onClick={() => handleItemClick(item)}
              className="text-black px-4 py-2 hover:bg-red-100 cursor-pointer flex justify-between"
            >
              <span>{item.name}</span>
              <span className="text-sm text-gray-500">R$ {item.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}