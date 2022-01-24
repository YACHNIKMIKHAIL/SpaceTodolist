describe('AddForm', () => {
    it('base example, visually look correct', async () => {
        await page.goto('http://localhost:9009/iframe.html?id=addform-component--add-form-base-example&viewMode=story');
        const image=await page.screenshot()

        expect (image).toMatchInlineSnapshot();
    })
})