
function Message(props)  {
 const messageArray =[ 'Umm..one more star please!! ⭐',
 'Hey, this is not fair 😕',
 'Looks fair but not so good 😐',
 'I liked it 🙂',
 'I loved it ❤️'] 
  return (
    <h1 className="message slide-in">{messageArray[props.number - 1]}</h1>
  )
}

export default Message