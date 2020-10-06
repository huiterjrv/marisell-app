import React from 'react'

import Category from 'components/admin/CreateAdmin/Category'
import Kind from 'components/admin/CreateAdmin/Kind'
import Written from 'components/admin/CreateAdmin/Written'

function CreateWritten ({ params }) {

    switch (params.route) {

        case 'written':
            return <Written route={params.route} />

        case 'kind':
            return <Kind route={params.route} />

        case 'category':
            return <Category route={params.route} />
    
        default:
            return <>
                <p>unmmm......</p>
            </>
    }
    
}
export default CreateWritten