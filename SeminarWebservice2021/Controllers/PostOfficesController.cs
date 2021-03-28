using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Threading.Tasks;

namespace SeminarWebservice2021.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostOfficesController : ControllerBase
    {
        private readonly IHttpClientFactory _clientFactory;

        public PostOfficesController(IHttpClientFactory clientFactory)
        {
            _clientFactory = clientFactory;
        }
        [HttpGet]
        [Route("workShift")]
        public async Task<IActionResult> GetProvinces()
        {
            var client = _clientFactory.CreateClient("GiaoHangNhanhProduction");
            var list = await client.GetStringAsync("v2/shift/date");
            return Ok(list);
        }

        [HttpGet]
        [Route("station")]
        public async Task<IActionResult> GetStation(string district_id, string ward_id)
        {
            var client = _clientFactory.CreateClient("GiaoHangNhanhProduction");
            var station = await client.GetStringAsync("v2/station/get?district_id=" + district_id + "&ward_code" + ward_id);
            return Ok(station);
        }

    }
}
