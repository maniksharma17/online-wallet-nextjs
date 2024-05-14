export default function Loading(){
    return <div className="grid grid-cols-2 m-auto ml-64 w-3/4 mt-36 gap-10 align-top">
        <Loader></Loader>
        <div className="flex flex-col">
            <Loader></Loader>
            <Loader></Loader>
        </div>
        
    </div>
}

function Loader(){
    return <div className="w-full m-auto h-full mt-10">
    <div role="status"  className="p-4 space-y-4  m-auto divide-y divide-gray-200 rounded shadow animate-pulse">
    <div  className="flex items-center justify-between">
        <div>
            <div  className="h-2.5 bg-gray-300 rounded-full w-full mb-2.5"></div>
            <div  className="w-32 h-2 bg-gray-200 rounded-full  "></div>
        </div>
        <div  className="h-2.5 bg-gray-300 rounded-full   w-12"></div>
    </div>
    <div  className="flex items-center justify-between pt-4">
        <div>
            <div  className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
            <div  className="w-32 h-2 bg-gray-200 rounded-full  "></div>
        </div>
        <div  className="h-2.5 bg-gray-300 rounded-full   w-12"></div>
    </div>
    <div  className="flex items-center justify-between pt-4">
        <div>
            <div  className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
            <div  className="w-32 h-2 bg-gray-200 rounded-full  "></div>
        </div>
        <div  className="h-2.5 bg-gray-300 rounded-full   w-12"></div>
    </div>
    <div  className="flex items-center justify-between pt-4">
        <div>
            <div  className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
            <div  className="w-32 h-2 bg-gray-200 rounded-full  "></div>
        </div>
        <div  className="h-2.5 bg-gray-300 rounded-full   w-12"></div>
    </div>
    <div  className="flex items-center justify-between pt-4">
        <div>
            <div  className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
            <div  className="w-32 h-2 bg-gray-200 rounded-full  "></div>
        </div>
        <div  className="h-2.5 bg-gray-300 rounded-full   w-12"></div>
    </div>
    <span  className="sr-only">Loading...</span>
</div>
</div>
}