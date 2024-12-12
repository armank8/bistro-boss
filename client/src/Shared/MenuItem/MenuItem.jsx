
export default function MenuItem({menu}) {
  return (
    <div className="flex gap-5">
        <img className="w-[118px]" style={{borderRadius:'0px 200px 200px 200px',background:'#D9D9D9'}} src={menu.image} alt="" />
        <div>
            <p className="text-2xl">{menu.name}----------</p>
            <p className="">{menu.recipe}</p>
        </div>
        <p className="text-yellow-600">${menu.price}</p>

    </div>
  )
}
