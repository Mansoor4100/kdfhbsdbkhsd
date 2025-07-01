// Simulate a fake backend with in-memory user and simple validation
let fakeUser = null;

export async function loginApi(email, password) {
  // Simulate API delay
  await new Promise(res => setTimeout(res, 500));
  if (fakeUser && fakeUser.email === email && fakeUser.password === password) {
    return { success: true, user: { name: fakeUser.name, email: fakeUser.email } };
  }
  return { success: false, message: 'Invalid email or password.' };
}

export async function registerApi(name, email, password) {
  await new Promise(res => setTimeout(res, 500));
  if (fakeUser && fakeUser.email === email) {
    return { success: false, message: 'Email already registered.' };
  }
  fakeUser = { name, email, password };
  return { success: true, user: { name, email } };
}

export async function logoutApi() {
  await new Promise(res => setTimeout(res, 200));
  return { success: true };
}
