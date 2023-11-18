import DOMPurify from 'dompurify'
import React from 'react'
import { Link } from 'react-router-dom'

const PublicationCard = ({ data }) => {
    return (
        <Link to={`/nesrlerimiz/${data.title.replace(/\s/g, '')}/${data.id}`}>
            {
                data?.is_active ?
                    <div class="card">
                        <article>
                            <h2>{data.title}</h2>

                            <div class="pic">
                                <img src={data.image} alt=''/>
                            </div>

                            <div class="desc">{DOMPurify.sanitize(data.content).replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ')}</div>
                        </article>

                    </div> : null
            }
        </Link>
    )
}

export default PublicationCard