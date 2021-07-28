import { SiteClient } from "datocms-client";

export default async function recebedorDeRequests(request, response) {
    if(request.method == 'POST'){
        const TOKEN = '57c9c44ec2e85589b4a70d611289b0';
        const client = new SiteClient(TOKEN)
        
        
        const registroCriado = await client.items.crate({
            itemType: "975365",
            ...request.body,
            //title: "Comunidade de Teste",
            //imageUrl: "",
            //creatorSlug: "matHeleno"
        })

        response.json({
            dados: 'Algum dado qualquer',
            registroCriado: registroCriado,
        })
        return;
    }

    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })

}
