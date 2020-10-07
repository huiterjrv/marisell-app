import React, { useContext,useState,useEffect } from 'react'
import './styles.css'

import ThemesCategoriesContext from 'context/ThemesCategoriesContext'
import getApi from 'services/getApi'

function EditNewWritten ({ params }) {

    const { themes,categories } = useContext(ThemesCategoriesContext)
    const [written, setWritten] = useState({});
    const [opacaity, setOpacaity] = useState({genero:null,categoria:[]});

    useEffect(() => {//comprovar que te yega en res para un error
        if(params.route)
            getApi({rout:'written',id:params.route})
            .then(res =>{
                setWritten({
                    ...res[0],
                    genero:res[0].genero._id,
                    categoria:res[0].categoria.map(e => e._id)
                })
                setOpacaity({
                    genero:res[0].genero._id,
                    categoria:res[0].categoria.map(e => e._id)
                })
            })
    }, [params.route]);

    const handleSubmit = () => {

        let config = {
            method: 'POST',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:{
                message:JSON.stringify({
                    ...written,
                    usuario: written.usuario?written.usuario._id:null,
                    creado: written.creado || new Date().toJSON(),
                    actualizado: new Date().toJSON(),
                    estatus:true
                })   
            } 
        }

        if (params.route) {

            getApi({rout:'written/update'},config).then(res => {
                console.log(res)
            })
            
        } else {

            getApi({rout:'written/new'},config).then(res => {
                console.log(res)
            })

        }

    }

    const handleClickCategory = event => {

        let idNode = event.target.dataset.id
        
        if(!written.categoria){

            setWritten({
                ...written,
                categoria:[idNode]
            })
            setOpacaity({
                ...opacaity,
                categoria:[idNode]
            })

        }else {

            if(written.categoria.some(e => e === idNode)){
                let i = written.categoria.indexOf( idNode );
                written.categoria.splice( i, 1 );
                opacaity.categoria.splice( i, 1 );
            }else {
                written.categoria.push(idNode)
                opacaity.categoria.push(idNode)
                
            }

            let arrayWrit = written.categoria
            let arrayOpa = opacaity.categoria
            setWritten({
                ...written,
                categoria:arrayWrit
            })
            setOpacaity({
                ...opacaity,
                categoria:arrayOpa
            })
        }
    
    }

    const handleClickGenero = event => {
        
        if(!written.genero){
            setWritten({
                ...written,
                genero:event.target.dataset.id
            })
            setOpacaity({
                ...opacaity,
                genero:event.target.dataset.id
            })

        }else if(written.genero._id !== event.target.dataset.id){
            setWritten({
                ...written,
                genero:event.target.dataset.id
            })
            setOpacaity({
                ...opacaity,
                genero:event.target.dataset.id
            })
        }

    }

    const handleChange = event => {

            setWritten({
                ...written,
                [event.target.name]: event.target.value
            });

    }

    const Edit = () => (
        <>
            editar<i className="fas fa-pencil-alt"></i>
        </>
    )

    const Crars = () => (
        <>
            crear <i className="fas fa-plus-circle"></i>
        </>
    )

    return <>
        <section className='edit-new-written'>
            <label htmlFor='titel'>
                <h2>Titulo</h2>
            </label>
            <input type='text' id='titel' name='titulo' onChange={handleChange} value={written.titulo?written.titulo:''} />
            <label htmlFor='chapter' >
                <h4>capitulo</h4>
            </label>
            <input type='text' name='capitulo' id='chapter' onChange={handleChange} value={written.capitulo?written.capitulo:''}/>
            <h4>genero</h4>
            <div className='box-themes'>
                {
                    themes.map( e => <p key={e._id} data-id={e._id} className={(opacaity.genero && (opacaity.genero ===e._id))?'':'w3-opacity'} onClick={handleClickGenero}>
                        {e.categoria}
                        </p> 
                    )
                }
            </div>
            <h4>categorias</h4>
            <div className='box-category'>
                {
                    categories.map( e => <p key={e._id} data-id={e._id} className={((opacaity.categoria.some(Cat => Cat === e._id)))?'':'w3-opacity'} style={{backgroundColor:e.background,color:e.color}} onClick={handleClickCategory}>{e.genero}</p> )
                }
            </div>
            <label htmlFor='text'>
                <h4>escrito</h4>
            </label>
            <textarea id='text' name='texto' onChange={handleChange} value={written.texto?written.texto:''} ></textarea>
            <p className='botton' onClick={handleSubmit} >{params.route?<Edit />: <Crars />}</p>
        </section>
    </>
}

export default EditNewWritten