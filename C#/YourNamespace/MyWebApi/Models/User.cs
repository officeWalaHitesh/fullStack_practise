using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;

namespace MyWebApi.Models
{
    public class User
    {
        [Key]
        public int user_id { get; set; }
        public string first_nam { get; set; } = string.Empty;
        public string last_nam { get; set; } = string.Empty;
        public string email { get; set; } = string.Empty;
        public int number { get; set; } = 0;
        public string Password { get; set; } = string.Empty;

        public DateTime create_time { get; set; }
        public DateTime modify_time { get; set; }
        
        [JsonIgnore]
        public Education? education { get; set; } // Reference navigation to dependent

    }
}