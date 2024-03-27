import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Card from "../component/card";
import Jumbotron from "./jumbotron";
import Nav from "./nav";
import Footer from "./footer";

//create your first component
const Home = () => {
	return (
		<div className="text-center">

			<div className="container">
				<Nav props= {navLanding}/>
			</div>

			<div className="container">
				<Jumbotron props= {jumbotronLanding}/>
			</div>

            <div className="row justify-content-center gap-3">
                <Card props= {cardLanding}/>
            </div>

			<div className="container">
				<Footer/>
			</div>

		</div>
	);
};


const navLanding = {
    tituloNav: "LOS PERRILLOS DE MANOLO",
    link1: "CORRAL",
    link2: "CAZAS",
    link3: "PEDIGREE",
    link4: "MONTAS"
};

const jumbotronLanding = {
    tituloJumbotron: "¡Ven y Únete a la Manada!",
    lema1: "¡Donde los Ladridos Son Melodía y los Rabos No Dejan de Moverse!",
    lema2: `¡Bienvenido a Los Perrillos de Manolo, donde los ladridos alegres y las travesuras traviesas son nuestra moneda corriente!  
    Somos más que un criadero; somos una comunidad apasionada de amantes de los perros dedicados a criar los compañeros 
    caninos más felices y saludables que puedas encontrar. Con nosotros, obtendrás más que un simple cachorro; 
    te llevas un amigo para toda la vida. <strong>¡Ven y únete a la manada hoy mismo! ¡Tu próxima aventura peluda te espera aquí!</strong>`,
    botonJumbotron: "Contacta con nosotros"
};

const cardLanding = [
    {
        imagenCard: "https://images.pexels.com/photos/2664417/pexels-photo-2664417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        tituloCard: "Felipe",
        descripcionCard: "Es un perro enérgico y juguetón. Siempre está listo para una aventura y le encanta correr y jugar al aire libre. Es leal y cariñoso con su familia, pero también puede ser un poco travieso a veces.",
        botonCard: "Lo quiero"
    },
    {
        imagenCard: "https://images.pexels.com/photos/257519/pexels-photo-257519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        tituloCard: "Clarinete",
        descripcionCard: "Es un perro valiente y protector. Siempre está alerta y atento a su entorno, y hará todo lo posible para proteger a su familia. Aunque puede ser un poco reservado con los extraños al principio, es leal y afectuoso con los que conoce bien.",
        botonCard: "Lo quiero"
    },
    {
        imagenCard: "https://images.pexels.com/photos/59965/dog-young-dog-puppy-59965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        tituloCard: "Lola",
        descripcionCard: "Es una perrita dulce y tranquila. Le encanta acurrucarse en el sofá y disfrutar del tiempo en familia. Es muy obediente y fácil de entrenar, y siempre está lista para dar amor y recibir caricias.",
        botonCard: "Lo quiero"
    },
    {
        imagenCard: "https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        tituloCard: "Chispa",
        descripcionCard: "Es una perrita juguetona y cariñosa. Siempre está llena de energía y le encanta jugar con sus juguetes favoritos. Es muy sociable y le gusta hacer amigos tanto con humanos como con otros perros.",
        botonCard: "Lo quiero"
    }
];


export default Home;


