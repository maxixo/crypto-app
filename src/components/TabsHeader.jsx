
import { Tabs } from "../components/ui/Tabs";

export function TabsHeader() {
  const tabs = [
    {
      title: "Transactions",
      value: "product",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Product Tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Holdings",
      value: "Holdings",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Services tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Assets",
      value: "Assets",
      content: (
        <div>
         
          <p>Assets tab</p>
          <DummyContent  />
        </div>
      ),
    },
 
  ];

  return (
    (<div
      className=" md:h-[40rem] [perspective:1000px]  relative b flex flex-col max-w-5xl mx-10 w-full  items-start justify-start my-20">
      <Tabs tabs={tabs} />
    </div>)
  );
}

const DummyContent = () => {
  return (
     <div>
        <h1>Lets go</h1>
     </div>

  );
};


export default TabsHeader;