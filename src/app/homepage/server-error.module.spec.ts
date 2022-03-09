import { ServerErrorModule } from './home-page.module';

describe('ServerErrorModule', () => {
    let serverErrorModule: ServerErrorModule;

    beforeEach(() => {
        serverErrorModule = new ServerErrorModule();
    });

    it('should create an instance', () => {
        expect(serverErrorModule).toBeTruthy();
    });
});
