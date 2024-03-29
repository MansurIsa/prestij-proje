import React from 'react'
import DOMPurify from 'dompurify'
import { Link } from 'react-router-dom'

const ServicesCard = ({ data }) => {

  console.log(data);

  return (
    <Link to={`/xidmetlerimiz/${data.title.replace(/\s/g, '')}/${data.id}`}>
      {
        data?.is_active ?
          <div class="card">
            <article>
              <h2>{data.title}</h2>

              <div class="pic">
                <img src={data.image} alt=''/>
              </div>

              <div class="desc">{data.title}</div>
            </article>

          </div> : null
      }

    </Link>

  )
}

export default ServicesCard