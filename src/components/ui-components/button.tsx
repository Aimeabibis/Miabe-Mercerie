interface ButtonProps {
  title: string;
  
}

export const Button:React.FC<ButtonProps> =({title}) =>{
    return (<>
    <div className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 cursor-pointer ">
        <span>{title}</span>
    </div>

    </>
    );
}