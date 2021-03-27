using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;


namespace SeminarWebservice2021.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AddressController : ControllerBase
    {
        private readonly IHttpClientFactory _clientFactory;

        public AddressController(IHttpClientFactory clientFactory)
        {
            _clientFactory = clientFactory;
        }

        [HttpGet]
        [Route("provinces")]
        public async Task<IActionResult> GetProvinces()
        {
            var client = _clientFactory.CreateClient("GiaoHangNhanhProduction");
            var provinces = await client.GetStringAsync("master-data/province");
            return Ok(provinces);
        }

        // GET : 
        [HttpGet]
        [Route("district")]
        public async Task<IActionResult> GetDistrict(int province_id)
        {
            var client = _clientFactory.CreateClient("GiaoHangNhanhProduction");
            var district = await client.GetStringAsync("master-data/district?province_id="+province_id);
            return Ok(district);
        }

        [HttpGet]
        [Route("ward")]
        public async Task<IActionResult> GetWard(int district_id)
        {
            var client = _clientFactory.CreateClient("GiaoHangNhanhProduction");
            var ward = await client.GetStringAsync("master-data/ward?district_id="+district_id);
            return Ok(ward);
        }

    }
}
