describe('Loader.io Performance Test', () => {
  const apiKey = 'd389ea43fec80681c011845a1641c3dc';
  const testId = 'd0dab5988f858213a8780d22656eefb1';

  it('should start a performance test on Loader.io and get results', () => {
    // POST isteği ile testi başlat
    cy.request({
      method: 'POST',
      url: `https://api.loader.io/v2/tests/${testId}`,
      headers: {
        'loaderio-auth': apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        duration: 60,
        initial: 1,
        total: 100
      }),
      failOnStatusCode: false
    }).then((postResponse) => {
      cy.log(`POST response status: ${postResponse.status}`);
      cy.log('POST response body:', postResponse.body);

      if (postResponse.status === 200) {
        cy.log('Test started successfully');

        // Test sonuçlarını almak için GET isteği
        const getResultsWithRetry = (retryCount = 0) => {
          cy.request({
            method: 'GET',
            url: `https://api.loader.io/v2/tests/79d2adc50186ba3723918501ad0c4e5e`,
            headers: {
              'loaderio-auth': apiKey
            },
            failOnStatusCode: false
          }).then((getResponse) => {
            cy.log(`GET response status: ${getResponse.status}`);
            cy.log('GET response body:', JSON.stringify(getResponse.body));

            if (getResponse.status === 200) {
              if (getResponse.body.status === 'ready') {
                cy.log('Test results:', getResponse.body);
                // Burada test sonuçlarıyla ilgili assertions ekleyebilirsiniz
              } else if (retryCount < 10) { // Retry sayısını artırdık
                cy.log('Test still running. Retrying in 15 seconds...');
                cy.wait(15000); // Bekleme süresini 15 saniyeye çıkardık
                getResultsWithRetry(retryCount + 1);
              } else {
                cy.log('Test results not ready after 10 retries');
              }
            } else {
              cy.log(`Failed to get test results. Status: ${getResponse.status}`);
            }
          });
        };

        // İlk GET isteğini başlat
        getResultsWithRetry();
      } else {
        cy.log(`Failed to start test. Status: ${postResponse.status}`);
      }
    });
  });
});
