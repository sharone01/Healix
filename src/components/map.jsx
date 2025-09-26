// const Services = [
    

//     
// const Portfolio = () => {

    const data = [
        { num: 1, name: 'Web Development', place: 'DataGirl' },
        { num: 2, name: 'Graphic Design', place: 'DataGirl' },
        { num: 3, name: 'Data Analysis', place: 'DataGirl' },
        { num: 4, name: 'Digital Marketing', place: 'DataGirl' },
        { num: 5, name: 'SEO Optimization', place: 'DataGirl' },
        { num: 6, name: 'Content Creation', place: 'DataGirl' }
    ];

//     return (
        <div className='services1'>
            <h2>Our Services</h2>
            
            {data.map((service, index) => (
                < div key={index} className='service11'>
                    <p>{service.num}</p>
                    <h1>{service.name}</h1>
                    <h1>{service.place}</h1>
                </div>
            ))}
        </div >
//     )
// }

// export default Portfolio;
// ]

