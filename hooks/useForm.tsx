export default function useForm(): [FormComponent: React.FC] {
  const FormComponent: React.FC = () => {
    return (
      <form className="flex flex-col gap-2 w-full">
        <p>HellO!</p>
      </form>
    );
  };
  return [FormComponent];
}
