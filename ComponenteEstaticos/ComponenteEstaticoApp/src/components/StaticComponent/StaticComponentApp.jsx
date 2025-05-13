const StaticComponent = () => {
  
  const items = ["manzana", "banana", "cereza"];

  return (
    <div className="bg-amber-400" >
    <ul className=" flex justify-center content-center">
     
      {items.map((item, index) => (
        <li className="p-2" key={index}>{item}</li>
      ))}
    </ul>
    </div>
  );
};

export  {StaticComponent};