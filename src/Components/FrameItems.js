import React from 'react'

function Frameitems() {
    // const {id} = useParams();

    // const findPeople = (people.find(people => people.id === parseInt(id)))
}

return (
    <div className='col-md-3' style={{ marginBottom: '3rem' }}>
        <div className="card" style={{ width: '18rem' }}>
            <div className='image-container'>
                <img src={Image} className="card-img-top" alt="..." />
            </div>
            <div className="card-body">
                <h5 className="card-title">{name}</h5> <span className='badge bg-secondary'>{rating}</span>
                <p className="card-text">{lyrics.substring(1, 50)} ...</p>
            </div>
        
            <div className="card-body">
                <button className="btn btn-success" onClick={() => handleClick(id)}>Vote</button>
                <button className="btn btn-primary" onClick={() => navigate('/lyrics/' + id)}>View Lyrics</button>
            </div>
        </div>
    </div>
)

export default Frameitems
