import React,{ useEffect,useState} from 'react'

import getApi from 'services/getApi'
import Category from 'components/CreateAdmin/Category'
import Kind from 'components/CreateAdmin/Kind'
import Written from 'components/CreateAdmin/Written'

function CreateWritten ({ params }) {

    const [content, setContent] = useState([]);

    useEffect(() => {

        getApi({rout:params.route})
        .then( res => setContent(res))
        
    }, [params.route]);

    switch (params.route) {

        case 'written':
                return <Written writtens={content} />

        case 'kind':
                return <Kind kinds={content} />

        case 'category':
                return <Category categories={content} />
    
        default:
                return <>
                    <p>unmmm......</p>
                </>
    }
    
}
export default CreateWritten