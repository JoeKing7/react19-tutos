import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';

interface State {
  text?: string;
}

async function handleFormSubmit(
  previousState: State | null,
  formData: FormData,
): Promise<State> {
  // Simulate a server action
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const text = formData.get('input') as string;

  console.log('Form submitted:', text);

  return {
    ...previousState,
    text,
  };
}

export default function Actions() {
  const [state, formAction] = useActionState<State, FormData>(
    handleFormSubmit,
    { text: '' },
  );

  return (
    <div>
      {/* <h2>Actions</h2>
			<p>
				Actions are used to perform operations or trigger events in your
				application. They can be dispatched to update the state or trigger
				side effects.
			</p>
			<p>
				Actions can be simple functions or objects that describe what should
				happen in the application.
			</p>
			<p>
				For example, an action could be a function that fetches data from an
				API or updates the state of a component.
			</p>
			<p>Actions are often used in conjunction with reducers.</p>
			 */}

      <h2>Actions</h2>
      <form action={formAction}>
        <pre>{JSON.stringify(state, null, 2)}</pre>
        <input type="text" name="input" placeholder="texto" />
        <Button />
      </form>
    </div>
  );
}

function Button() {
  const { pending, data, method, action } = useFormStatus();

  console.log({ pending, data, method, action });

  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Enviando...' : 'Enviar'}
    </button>
  );
}
