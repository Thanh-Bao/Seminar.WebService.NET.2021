using Microsoft.AspNetCore.Mvc;
using SeminarWebservice2021.Model;
using System.Net.Http;
using System.Threading.Tasks;

namespace SeminarWebservice2021.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FeeController : ControllerBase
    {   
        private readonly IHttpClientFactory _clientFactory;
        public FeeController(IHttpClientFactory clientFactory)
        {
            _clientFactory = clientFactory;
        }

        [HttpPost]
        public async Task<IActionResult> GetFee([FromBody] ProductFeeShipping info)
        {

            var client = _clientFactory.CreateClient("GiaoHangNhanhProduction");
            var fee = await client.PostAsJsonAsync("v2/shipping-order/fee", info);
            string result = fee.Content.ReadAsStringAsync().Result;
            return Ok(result);
        }
    }
}

/*{
    "from_district_id":1454,
"service_id":53320,
"to_district_id":1452,
"to_ward_code":"21012",
"height":50,
"length":20,
"weight":200,
"width":20,
"insurance_fee":10000
}*/
