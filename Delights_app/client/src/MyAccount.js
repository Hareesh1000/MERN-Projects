import React from 'react'
import {useState, useEffect } from 'react';
import './AccountStyle.css'
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function MyAccount({isAuthenticated}) {

  const [profilePic,setProfilePic] = useState('');
  const[userName,setUserName] = useState('Guest');
  const[loginVisibility,setloginVisibility] = useState('none');
  const navigate = useNavigate();

    useEffect(
      ()=>{
          if(isAuthenticated){
              const dataString = localStorage.getItem('user');
              const data = JSON.parse(dataString);
              console.log(`data is `,data)
              // console.log(`user is `,user);
              console.log(`URL is `,data.user.profile_pic);
              setProfilePic(data.user.profile_pic);
                setUserName(data.user.user_name);
                setloginVisibility('hidden');
          }
      },[isAuthenticated]
    )
  return (
    <div className='myAccount'>

      <div className='myaccountMain'>
        <div className='account-head'>

          <h1>My Account</h1>
            <div className='account-user'>
                <Avatar alt="Guest name" src={profilePic} />
          <h4> {userName}</h4>
          {/* <a href=''>sign in</a> */}
          <Link to='/signin' style={{visibility:loginVisibility}}>Login</Link>
            </div>
         

        </div>

        <div className='accountCards'>

          <div className='acc-card' onClick={()=>{navigate('/my-account/my-orders')}}>
            <div className='acc-image'>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1PY8v1p9lqbDmt7_R1lBEubF6bW3gwdnsHw&s'
                alt='order Box'
              ></img>
            </div>
            <div className='card-content'>
              <h3> Your order</h3>
              <p> Track your order</p>
            </div>

          </div>

          <div className='acc-card'>
            <div className='acc-image'>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt4u6mSM3rBqWd2K-WzrmMpHF9VfGEtloS5Q&s'
                alt='order Box'
              ></img>
            </div>
            <div className='card-content'>
              <h3> Your Address</h3>
              <p> Change your address</p>
            </div>

          </div>

          <div className='acc-card'>
            <div className='acc-image'>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMFq-3NeHiTUh5zvhFucfZQ1EOdUObI6wWpQ&s'
                alt='order Box'
              ></img>
            </div>
            <div className='card-content'>
              <h3> Login & Security</h3>
              <p> Edit login,name, and mobile number</p>
            </div>

          </div>

          <div className='acc-card'>
            <div className='acc-image'>
              <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA8FBMVEX///+AtPtheIFhovn/0GT/wlDx9PaBtf5fdXpHWVl5sPuBtftZnvljfIpqi6hgdn19r/B0rfqjyPxtqfrM4P3/xla10fz29/b/zWDC2fj/zlpQZGdTm/lvlLv/yVqGtvrq8v6dxPr/0ld3otdWb3n/zVfCyc2vtrczSkr/01j/5a//7cerzPx0nMx7q+n8z2azv8j/6br//Pb/246WwPxemeVPbILa6P5nhJrlyom+wbr/8dWJtvD/2ID/1XWhu9r/89wxRkLi6/ecuuDEwrXoy4jQxaaqu86Ysc/uzH1ph6HcyJaUuOTCz93GwrnUwpZxhHKhAAALXUlEQVR4nN3daVvbSBIAYAsRy5FkjCfYMVqDjVlPNmEw5ySEK+yELAnJzv7/f7OS5UN9VXdLfYn6lCexHb1UqY+yJBoN2zHe+eNy9Mb3uwe7Y9vHoiHG/VEYBp4XpcQ4Hnb7TdtHpDj6XujlkRHTiP2+7WNSGZ9WvjXRj7tj28elLPpdrxhLoh/v2j4yRfFH6Hl04vBlVOpvOPClESnAl0WkAl8SkQF8OUQmcE3881/vbB9lhQCAS+Kfr1/XmAgCc2IKrDGRA8yIc2BtiVygF2z/43WNiSLA9kaNiULAzkZ9iQLAKAPWliiawdoSZYC1JMoBa0iUBdaOKA+sGbEMsFZE8WmipsRyGawRsTywJsQqwDXx36e2Hcwoew5ixI/ONjaqZXBF/Ohs76Y6cE786Gx7SgUwJX50tgOnBtjacrbJqAoYuNpHVQZ0tVVcdZpYAJ+D7KUuEhVm0E2iYqB7ROVA14hKz0EXiRoy6BZRE9AdoiLgMwF0hagtg64QtQJdIGoG2idqmSZcImrPoG2iEaBNoiFgGpaI5oCWsmgQmBJ980SjwDSMEw1ME0hEoWGi6QwWTkUzRPPAwqlogmgD6HmhOaLpc3AR6zrVTTSXQfwVvhmiOWC4u4M2brpGiCaBb9/uoP+bb4BoFNhsosRiEnURDQNxYjGJeojGgRixMJzqIZqbJlZAjBj4WokWMogTI18n0RIQISJjjWqiNSBCRMtUKdHKOUgh+rqIFjOIENHRVCHRMrBADHGhGqLGL1/EgBlx8R8RQhVE6xmcE0fzV0SksDrRCWDzIH87eSJWJzoCZA41lYlWp4lViS6BxJxfnehWBj3aYFqN6ByQJfSH5R5d4B6QNl3kEY/rCnx7gB4FS+h3awpsYkC2MJY+Fd0AEkfBFPq+5PNuHFiqkSUKCiWT6EYGSSBzpJE9E10FMmeLLIZjF4FBXwoICiUe52Pyy5dRk7VhogEZq7aF8MC9DM6Jf9GJNCBj5S17Ipr+fpBOpAI5Qt9NYEYUK1GPvgOWFdr4hnc0xhuIDCA44QsK7XyFjRcqEwgNpWJCO0CcyH/wEj3eKAHq+I4+I4qUKE84cjaDc+Iqi2wguGYTWZjaBK6JABCc79NV2yengctJAwDyipQ30Ng7B1fE5lvgHMwCLlLOos12BufEv0Agp0g5nRoXgJ4HHwS8oIkvTQArlCg/KqXQjQzyhCAQbpjWAwimEK7RWgDhgTQGlzP2pwmRgHf3kSMZDLIoS6wBMNjee77aOo5KGaHlTOUSVQU87rQ6nU6rPStBhGrUyDkoAtxr5S/udEoQgU2FMyW6BKbEdiQtrBUwfcNh+avYrZyDAtMEAtzo7MkJbQNlM5gK5dYGwCjjZIlK5xACuplByfNQJ1DRUo0ASo2lNSzRVCgxH9YBeIwDZWq0Buegt01k8IUBgz3sc1Rl0JESTT/pygKQ+J0vGoFegH6SkRLtG93RB1fFjzIyyHzq8j5aaU8GmStUZRAs0Sb/mNQ2naL1hxnJIL9GVXfVgsPVxtcIcMw9IOVdteAwb15sKFrJeCCQm0IdfdHAO9563jqUaLKVPgfTGJkHetJNxPIlmhYpnEL7X75UBTZ2QKGd1n0QLiPgAnklmi5noMMzD0xVo9uvp9ePWVyffr3Nfscl0JPhAxuXJoCBtx0JnHZhePv0+Pk+mUySPCaTyf23/zyFw7hsiTbAgUbZjn621W63tzhzX8r7/dvJJNnEI5mcfHvXpSFFMthosLsHCnf0nfSDOi2o2RSGX34mpG4Z7yefv/u4UQzIFqpvWbCJoXf6g5I9FHl/ihqFShSoUh09mdaM/pLw6ccE5s1jcvcUx9LAxgHjwFR/+ZIFvSka3n7mpG9t/DYbypVoGn3qUerpqnWuyHcE4TWvPhHjY16q4sDGJ9qMr6t13ybekiZQpEALxB+zWKJE02hShHq+fKHlMPxyL5HAeSQn34cyQNqUr691f4y9KXySS+Aije8CGSC5MNUG7GzgGbwuA0yJH6SE+Hyhr3WPtyzCx3LAzc2pHBFNorKlGrd1z8zgYL/Xe5VFr7c/oL8kkSNeFv5nda17/F14TyY8pQL3c9w6evvULJ7JCAvNNnW7CTyFRAa/UAbRAc5bICmZnN7IEFdzosLW/Rb6QXgGg9t7UR/LeC5DXJyKKlv3qJDoi4bkSo3tmxuJn8edjDAnqtzRoyMpCSRGmQHoywJPo+RokxLVtu5n0MUywS2ekX0u8NUrfMhJHiSJahu/wfPq08jWffgzkQcSlSpZp40dxU2n5Q+M0ronFmvkKZgOLZSBByMmR3LE3/+pEugF3lan1Wm1rsjWffCDl8EeC46+8V5OyCNKtw2D2fHe8Yx45iiRQkqJ5qMKZfRBz0XZJMLEMp1teus+RFNIG0UX4yb7XxZvlU0iRFTX+A2/oCmkMADhK+S9cisbkKiws40NpJSJfl2KlAJGTkXZ4ZRNVPnly+0JXKPoaEL+AJA6nUqt3dhEof1gEM22RVr36J6CEODLM/gFidQeg0kUAh5etVqtjT3uZffhZziFm3iASZQfa2hE0db9/LXcy+7RIiUyRG4i4CQO5MuUIMp11XjXUWIjKa9GaULkp5BIj6YEUbp1D1/tGz4WR1JirFwOo/u93mJzz5n2JXcYFKJ8655s+yLCnyJFuujTDOjb4mKiS8wXKLFEV60FvxjZ2xMHj/19j74tLn7ESZkTcU0s09mGhVHxNGSOpFQXkem8TEsKc2KpvihYpcGvopBcsiBVyoziiTh9KCnMiOVa9+BIg+4rmMMk0JTKongiSu8visRSV91vbEOvR1c08AZwwHQiwhKrmmX8l3vZqUDrHhdeJ6AQX9Iw2htFYbnpIg/4aiKvcJWhKNAL/+YI8Smf3oNTJeQSgzYG5F5OyRUSyzYqsfjvlYS8a8LwFPIviOULiaYhrVCV5ZBDxL+cELgglnseUgpVrxAkYkKRS5p5Y+nCOMiCnURVYymXiFap0CXN6HzIaQQvJ0dYWH4+FMmiZAb5axpqMRJ/r2ZNI0IslKnoVfecdSk1iay/z3NYdl0qSFxs7cWvuufsLeY12MMkrNzOo+zeQph42G6l8Sx81T1nf7g4x3rrP1KEKvaHEsRgdngocnnsUgjv8Zf5We/xKbWsYI8vQ8yQorzsxV/BPo1Qo6Z6n0aWKBFR9w3cayOFRAqr99o0EqOuH/8ED5/sl4IpLNUv1UjMbiuIn2z3vDUS8/smupa/t9BIXNwYMvyfwu+eLpQCKxKXd77Ev94jWSIROr8/1Ehc39oztPgdsEZi4d6l+DuaRIPf42skIjdnxbauxdBIRO8+i7/buZ5GIxG/vS62ck2URiJx/2C8vbkpT6x4XZtGIuUGyeG799jhar82USORegfo0PT1pRqJ9Ftc467Za4Q1Eln38Ma/TF7nrZHIvkmZmDLy0HKtvkYidBd2cDalHbuO+y30ETn30Z/J3tW1yqARoACRex89K4uOALlEgQcF3CSMMoRC7b6+AlHoUQ8P0vcfDk60j6KCRMFnWZxfyFVqcqd5HhQmij/L4mgqXqkDM4OoCFHmYR3nF4Jn4yC5ezAOZBAlH7dycyeSx+Re036QFxSi/PNkuMbB1JavQSGWep7Mw0XCLNZBklwYHUHxwIhln/F7fnRxQipT3ebdmeEBlIgiMfLKPsQ4jfOHDxf3yTRZxnR6f/HhxjYvixUx8qAnpYs96uH84ebo7OzD2dnRzYMLuDwyYhR5wAOPpJ5l4WLsdMMu/IuJ5B714GD0h6Cv/kAeseYlmgdEfBFAiPgCSjSPXcZz1Ybwb5aqU4y7tMeqSfxS3hpEH3+sWhxfjm0flNpo9sPh6qFj8dA/GNs+Ig0x3j2Yr93ejPq8X7CoP/4PIAb47/TFWEwAAAAASUVORK5CYII='
                alt='order Box'
              ></img>
            </div>
            <div className='card-content'>
              <h3>Payment options</h3>
              <p> Edit or add payment options</p>
            </div>

          </div>

        </div>

      </div>


    </div>
  )
}

export default MyAccount