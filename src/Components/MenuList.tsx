import MenuItem from "./MenuItem"

interface foodItemsProps {
    id: number,
    itemName: string,
    description: string,
    foodImage: string,
    price: number,
    }

interface indexProps{
  foodItemsList : foodItemsProps[],
}





function MenuList({foodItemsList}: indexProps) {
 
   

  return (
    <>
      <section>
  {foodItemsList.map((menu) => (
    <MenuItem key={menu.id} food={menu} />
  )
)}
</section>
    </>
  )
}

export default MenuList;