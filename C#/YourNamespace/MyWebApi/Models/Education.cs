using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;

namespace MyWebApi.Models
{
    public class Education
    {
        [Key]
        public int user_id { get; set; } // foreign key
        public int passing_year { get; set; } = 0;
        public string qualification { get; set; } = string.Empty;
        public string stream { get; set; } = string.Empty;
        public string location { get; set; } = string.Empty;

        public DateTime create_time { get; set; }
        public DateTime update_time { get; set; }
        [JsonIgnore]
        public User? user { get; set; } = null; // Required reference navigation to principal
    }
}