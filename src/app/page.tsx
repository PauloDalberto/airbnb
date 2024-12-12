'use client'

import { Input } from "./components/input/Input";
import { useRouter } from "next/navigation";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  email: z.string().email("Digite um email válido!"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres!"),
})

type DataProps = z.infer<typeof schema>;

export default function Home() {
  const { register, handleSubmit, formState: { errors }} = useForm<DataProps>({
    mode: 'onBlur',
    resolver: zodResolver(schema)
  });

  const router = useRouter();

  function onSubmit(){
    router.push('/pages/reserve')
  }

  return (
    <main className="h-screen w-full flex justify-center items-center">
      <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Bem vindo de volta!</h1>
      <p className="text-gray-600 mb-8">Insira suas informações para prosseguir para o site!</p>

      <form
        className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <Input
            id="email"
            type="text"
            placeholder="email@email.com"
            className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2" 
            Icon={"symbol"}
            {...register('email')}
            helperText={errors.email?.message}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray10 mb-1">
            Senha
          </label>

          <Input
            id="password"
            type="password"
            placeholder="senha123"
            className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2"
            Icon={"symbol"}
            {...register('password')}
            helperText={errors.password?.message}
          />
          </div>
        <button
          type="submit"
          className="w-full bg-b1 text-white py-2 rounded-lg hover:bg-b2 transition duration-200"
        >
          Entrar
        </button>
      </form>

    </div>
    </main>
  );
}
