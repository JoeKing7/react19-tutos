import { useRef } from 'react';

interface InputProps {
  readonly ref: React.Ref<HTMLInputElement>;
}

function Input({ ref }: InputProps) {
  return <input ref={ref} placeholder="Ejemplo Forward Ref" type="text" />;
}

export default function Form() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
      />
      {/* Podemos usar link en los componentes. Para usar el link con css lo mejor es usar preload, para precargar el css y evitar parpadeos. Aquí lo usamos en el App.tsx */}
      <form action="">
        <Input ref={inputRef} />
      </form>
      <button onClick={handleFocus}>Focus en el input</button>
    </>
  );
}
