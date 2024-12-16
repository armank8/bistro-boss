
export default function MenuItem({item}) {
  // console.log(item);
  return (
    <div className="flex gap-5">
        <img className="w-[118px]" style={{borderRadius:'0px 200px 200px 200px',background:'#D9D9D9'}} src={item.image} alt="" />
        <div>
            <p className="text-2xl">{item.name}----------</p>
            <p className="">{item.recipe}</p>
        </div>
        <p className="text-yellow-600">${item.price}</p>

    </div>
  )
}
