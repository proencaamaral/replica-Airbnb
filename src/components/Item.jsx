import React from "react";

const Item = () => {
  return (
    <a href="/" className="flex flex-col gap-2">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/367793973.jpg?k=1127d912a184755a9f20f8a3564b7376b24a977f6c77d760a117fa99ef82b8f7&o=&hp=1"
        alt="Imagem da acomodação"
        className="aspect-square rounded-2xl object-cover"
      />
      <div>
        <h3 className="text-xl font-semibold">Cabo Frio, Rio de Janeiro</h3>
        <p className="truncate text-gray-600">
          Cobertura, duplex, em frente a praia das Dunas, Cabo Frio. As três
          suítes com ar condicionado. TV na suíte master e sala, com sky na
          sala. Cozinha equipada. Wi-fi de 120mbs da Vivo Fibra. Piscina e
          churrasqueira privativas. Estacionamento para dois carros dentro do
          prédio. Com uma área externa com vista panorâmica da praia das Dunas.
          O espaço Cobertura duplex em frente a praia das Dunas, em Cabo Frio. O
          apartamento conta com três suítes e mais um banheiro social, piscina e
          churrasqueira privativas, com uma área externa com vista panorâmica da
          praia das Dunas. Bairro calmo. Na rua lateral você encontra uma
          padaria que oferece café da manhã e alguns restaurantes. 3–5min da
          Praia do Forte (indo de carro). Cobertura fica no 4º andar.
        </p>
        <p>
          <span className="font-semibold">R$ 550</span> por noite
        </p>
      </div>
    </a>
  );
};

export default Item;
