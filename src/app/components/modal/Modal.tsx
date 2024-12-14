import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Bars4Icon, UserCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function ModalComponent() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="flex gap-2 items-center rounded-3xl border py-2 px-4 border-[mediumGray] cursor-pointer hover:scale-105 hov">
          <Bars4Icon width={24} height={24}/>
          <UserCircleIcon width={36} height={36}/>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-70 animate-fadeIn" />
        <Dialog.Content className="bg-white rounded-lg shadow-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-sm w-full p-6 animate-scaleIn">
          <Dialog.Title className="text-lg font-medium text-gray12 mb-2">
            Edite sua conta
          </Dialog.Title>
          <Dialog.Description className="text-sm text-gray11 mb-6">
            Digite seu email e senha para alterar a conta.!
          </Dialog.Description>
          <fieldset className="flex gap-5 items-center mb-4">
            <label
              className="text-sm text-b1 font-medium w-20 text-right"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="flex-1 rounded border border-gray4 px-3 py-2 text-sm text-gray12 focus:ring-2 focus:ring-b2"
              id="email"
              placeholder="Digite seu email"
            />
          </fieldset>
          <fieldset className="flex gap-5 items-center mb-6">
            <label
              className="text-sm text-b1 font-medium w-20 text-right"
              htmlFor="password"
            >
              Senha
            </label>
            <input
              className="flex-1 rounded border border-gray4 px-3 py-2 text-sm text-gray12 focus:ring-2 focus:ring-b2"
              id="password"
              defaultValue="alterar para valor"
            />
          </fieldset>
          <div className="flex justify-end gap-4">
            <Dialog.Close asChild>
              <button className="bg-b1 text-white px-4 py-2 rounded font-medium hover:bg-b2">
                Salvar alterações
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button
              className="absolute top-4 right-4 rounded-full bg-gray2 p-1.5 hover:bg-gray3"
              aria-label="Close"
            >
              <XMarkIcon className="h-5 w-5 text-b1" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
