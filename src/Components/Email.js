import './Email.css';

function Email() {
    return (
        <div className='Email'>
            <h1>Email Me!</h1>
            <form>
                <input 
                type='text'
                name='name'
                placeholder='Name'
                ></input>
                <input 
                type='text'
                name='subject'
                placeholder='Subject'
                ></input>
                <input 
                type='text'
                name='message'
                className='message'
                placeholder='Message'
                ></input>
            </form>
        </div>
    )
}
export default Email