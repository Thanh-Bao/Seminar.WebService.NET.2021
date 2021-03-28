using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SeminarWebservice2021.Model
{
    public class ProductFeeShipping
    {

        public int from_district_id { set; get; }
        public int service_id = 53320;
        public int to_district_id { set; get; }
        public int to_ward_code { set; get; }
        public int length { set; get; }
        public int weight { set; get; }
        public int width { set; get; }
        public int insurance_fee { set; get; }
    }
}
