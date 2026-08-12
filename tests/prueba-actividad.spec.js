    import { test, expect } from '@playwright/test';

    test('Actividad Swag Labs', async ({ page }) => {
    
        await page.goto('https://www.saucedemo.com/'); // aqui configuramos la rutra para la pagina que vamos a usar parra esta prueba.
        await page.waitForTimeout(2000);// esto es un detalle de fina coqueteria es para que sea mas lento el sistema de las pruebas y se puedan ver trabaja.
        
        await page.locator('[data-test="username"]').fill('standard_user');//esta es la  parte paara configurar los usuarios
        await page.waitForTimeout(1500);
        await page.locator('[data-test="password"]').fill('secret_sauce');// en estya parte usamos una logica parecida a ña de arriba con el usuario peero teniendo encuenta que es para la ccontraseña
        await page.waitForTimeout(1500);
        
        await page.locator('[data-test="login-button"]').click();// estyp es parA que nos direijamos al boton de login 
        await page.waitForTimeout(1000);

        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');// vamos a mirar si entramos o no a la parte de index  del sistema
        await page.waitForTimeout(2000);

        await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();// prueba de argegar producto al carrito
        await page.waitForTimeout(2000);

        await page.locator('[data-test="shopping-cart-link"]').click();// prueba de ir al carrito
        await page.waitForTimeout(2000);

        
    });
