using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class CastType 
    {
        [Key]
        public Guid Id{ get; set; }
        public string Name {get; set;}
    }
}