interface inputBoxType{
  label: string,
  type: string,
  setState: any,
  placeholder: string
}

export const InputBox = ({label, type, setState, placeholder}: inputBoxType) => {
  return (
    <div className="flex flex-col">
          <label className="ml-1 text-md font-thin">{label}</label>
          <input name={type} type={type} placeholder={placeholder} onChange={(e)=>{setState(e.target.value)}} className="h-8 outline-none text-md borde p-2 rounded-lg mb-2 border placeholder:font-light focus:ring-blue-950 focus:ring-1 placeholder:text-gray-600 placeholder:text-md"/>
    </div>
  );
};
