"use client"; // 회원가입입 페이지는 통상 CSR로 처리함.

import Image from "next/image";
import { useState } from "react";
import InputField from "@/components/common/InputField";
import { signUp } from "@/lib/services/authService";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  
    
  const router = useRouter();

  // 회원가입 핸들러
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, password, name)
  
    try{
      const {accessToken, refreshToken } = await signUp({email, password, name })
      // 성공 시 자동으로 로그인 되게 설정
      // 성공했으면 토큰 저장
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      router.push("/dashboard")

    }catch(err:unknown){
      if(axios.isAxiosError(err) &&err.response){
        alert('회원가입 실패 : ' + err.response.data);
      }else{
        alert('로그인 중 알 수 없는 에러가 발생했습니다.');

      }


    }


  }


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
                회원가입
            </h1>
          <form className="space-y-5" onSubmit={handleSignUp}>
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
            <InputField
              id="name"
              label="이름"
              type="name"
              value={name}
              placeholder="이름을 입력하세요"
              onChange={(e) => setName(e.target.value)}
              required
            />

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
            >
              회원가입
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
