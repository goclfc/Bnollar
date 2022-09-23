import React,{useState} from 'react'
import './Contacts.css'
import {ContactsData} from './ContactsData' 





function Contacts() {


        const [activeColor,setActiveColor] = useState(false)

        
   const active = () => {
       setActiveColor(true)
   }

  return (
    <div className='contacts-wrapper'>

       <div className="contacts-header">
           <h1>Contacts</h1>
       </div>
       <div className="contacts-profile__wrapper">
        {ContactsData.map((contact) => {

                return (
                    <>
                        {}
                    

                    <div className="contacts-profile-cont">
                           <div className="contacst-profile-img">
                              <a href={contact.linkTo}><img src={contact.profileImg} alt="img" /></a>
                           </div>
                           <div className="contacts-text">
                               <div className="contacts-profile-name-surname"> <a href={contact.linkTo}>{`${contact.name} ${contact.surname}`}</a></div>
                                <div className="active-status"> <p>{contact.activeStatus}</p></div>
                           </div>
                    </div>

                    </>

                )


        })}
        </div>
    </div>
  )
}

export default Contacts