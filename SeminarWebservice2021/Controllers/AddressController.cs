using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;

namespace SeminarWebservice2021.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AddressController : ControllerBase
    {
        [Route("provinces")]
        public IActionResult GetProvincesAsync()
        {
            var httpRequestMessage = new HttpRequestMessage
            {
                Method = HttpMethod.Get,
                RequestUri = new Uri("https://jsonplaceholder.typicode.com/posts"),
                Headers = {

            { HttpRequestHeader. .ToString(), "application/json" },
            { "X-Version", "1" }
        },
                Content = new StringContent(JsonConvert.SerializeObject(svm))
            };


        }
    }
}
