import Header from "./components/Header";
import Input from "./components/Input";
import Alltodo from "./components/Alltodo";
export default function App() {
  return (
    <div className="max-w-4xl   mx-auto m-20   rounded-xl h-auto shadow-2xl">
      <Header />
      <Input />
      <Alltodo />
    </div>
  );
}
