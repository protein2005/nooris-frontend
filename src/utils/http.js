export async function login(data) {
  const response = await fetch(`http://localhost:8080/api/v1/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const resData = await response.json();
  if (!response.ok) {
    throw new Error(resData.detail);
  }
  return resData;
}

export async function getMenu() {
  const response = await fetch('http://localhost:8080/api/v1/menu', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const resData = await response.json();
  if (!response.ok) {
    throw new Error(resData.detail);
  }
  return resData.menuItems;
}

export async function getCategoriesItem(category) {
  const response = await fetch(`http://localhost:8080/api/v1/menu/category/${category}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const resData = await response.json();
  if (!response.ok) {
    throw new Error(resData.detail);
  }
  return resData.menuItems;
}

export async function updateMenuItem(reference, data) {
  const response = await fetch(`http://localhost:8080/api/v1/admin/menu/${reference}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const resData = await response.json();
  if (!response.ok) {
    throw new Error(resData.detail);
  }
  return resData;
}

export async function deleteMenuItem(reference) {
  const response = await fetch(`http://localhost:8080/api/v1/admin/menu/${reference}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    const resData = await response.json();
    throw new Error(resData.detail);
  }
  return true;
}

export async function createMenuItem(data) {
  const response = await fetch('http://localhost:8080/api/v1/admin/menu', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const resData = await response.json();
  if (!response.ok) {
    throw new Error(resData.detail);
  }
  return resData;
}
