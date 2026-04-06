
import Button from "./Button"
const ButtonList = () => {

  const list = ["All", "Music", "Gaming", "News", "Live", "Cricket", "Cooking", "Comedy", "Movies", "Fashion", "Beauty", "Technology"];
  return (
    <div className="flex">

      {list.map((item)=> <Button key={item} name = {item}/>)}
      
    </div>
  )
}

export default ButtonList