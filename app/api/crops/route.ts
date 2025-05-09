let names: any[] = [];

export async function GET(request: Request) {
    return new Response(JSON.stringify(names), { status: 200 });
}

export async function POST(request: Request) {
    const body = await request.json();

    names.push(body);

    return new Response(`POST Request Received: ${body.name}`);
}