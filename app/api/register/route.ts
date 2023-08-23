import { NextResponse } from 'next/server';
const DataRoute = `${process.env.SERVER_API}/users`;

export async function GET(request: Request) {
    const res = await fetch(DataRoute, {
        method: 'GET',
    })
    return await res
};

function validateString(string: string) {
  //remove accents, {}() []/\\ ,and keep only letters and numbers . , - _ @ and  space
  const regex = /[^a-zA-Z0-9.,\-_@ ]/g;
  const newString = string.normalize('NFD').replace(regex, '');
  return newString;
}


function validateLenght(name: string) {
  if (name.length > 3) {
    return true;
  }
  return false;
}
export async function POST(request: Request) {
  if (request.method === 'POST') {
    //get item from body
    const body = await request.json();
    const { name, password } = body;
    const ValidString = validateString(name);
    const ValidPwd = validateString(password);
    const ValidUsername = validateLenght(ValidString);
    const ValidPassword = validateLenght(ValidPwd);

    //validate before continue
    if (ValidUsername && ValidPassword) {
      //insert here the post
      const username=ValidString;
      const password=ValidPwd;
      //TODO hash password
      const sanitizedBody = { username, password };
      console.log(sanitizedBody, "sanit");
      const res = await fetch(DataRoute, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sanitizedBody),

      })
      return res
    }
    return NextResponse.json({
      message: "successo",
      status: 201,
    })
  }
  //return Error
  return NextResponse.json({ error: "error" });
};

