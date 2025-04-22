"use client"; // 로그인 페이지는 통상 CSR로 처리함.

import Image from "next/image";
import { useState } from "react";
import InputField from "@/components/InputField";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-20 max-w-6xl w-full">
        <div className="flex justify-center md:justify-end w-full md:w-1/2">
          <Image
            src="/images/TASKCO.png"
            alt="Taskco Logo"
            width={1280}
            height={800}
            className="w-64 md:w-80 object-contain"
          />
        </div>
        <div className="w-full md:w-1/2 max-w-md bg-white p-10 rounded-xl shadow-lg border border-gray-200">
          <h1 className="text-3xl font-bold text-center text-gray-700 mb-8">
            로그인
          </h1>

          <form className="space-y-5">
            <InputField
              id="email"
              label="이메일"
              type="email"
              value={email}
              placeholder="이메일을 입력하세요"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <InputField
              id="password"
              label="패스워드"
              type="password"
              value={password}
              placeholder="패스워드를 입력하세요"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
            >
              로그인
            </button>
          </form>

          <form className="mt-4" action="goJoin" method="post">
            {/* 클래스에 block 추가해줘야함. */}
            <Link href='/signup' className="block w-full text-center bg-purple-500 text-white py-2 rounded hover:bg-gray-400 transition-colors">회원가입</Link>
           
          </form>
        </div>
      </div>
    </div>
  );
}
