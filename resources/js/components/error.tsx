export default function Error({ message }: { message: string }) {
  return (
    <div className="grid h-screen w-screen place-items-center">
      Something went wrong: {message}
    </div>
  );
}
