interface inputBoxType{
  label: string,
  type: string,
  setState: any
}

export const AuthInputBox = ({label, type, setState}: inputBoxType) => {
  return (
    <div className="flex flex-col">
          <label className="ml-1 text-md">{label}</label>
          <input name={type} type={type} onChange={(e)=>{setState(e.target.value)}} className="h-10 outline-none text-2xl bg-gray-200 p-2 rounded-lg hover:bg-blue-100"/>
    </div>
  );
};
