import { createContext, useContext, useState } from "react";

// Definir el tipo de datos compartidos
interface ContextData {
  open: boolean;
  setOpen: (param: boolean) => void;
}

//Crear un contexto con un valor inicial undefined
const SidebarContext = createContext<ContextData | undefined>(undefined);

//Componente proveedor qu evuelvo los elementos en donde se compartira el contexto
const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  const contextValue: ContextData = {
    open,
    setOpen,
  };

  return (
    <SidebarContext.Provider value={contextValue}>
      {children}
    </SidebarContext.Provider>
  );
};

//Consumido
const useSidebarContext = () => {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error(
      "useSidebarContext debe ser utilizado dentro de un MiContextoProvider"
    );
  }

  return context;
};

export { SidebarProvider, useSidebarContext };
