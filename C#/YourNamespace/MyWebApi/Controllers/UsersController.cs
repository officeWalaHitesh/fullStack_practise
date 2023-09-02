// Inside UsersController.cs
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyWebApi.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MyWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UsersController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            return await _context.users.ToListAsync(); // Use the correct DbSet property name
        }

         [HttpGet("{userId}")]
        public async Task<ActionResult<User>> GetUserById(int userId)
        {
            var user = await _context.users.FindAsync(userId);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        [HttpGet("education/{userId}")]
        public ActionResult<Education> GetUser(int userId)
        {
            var userWithEducation = _context.education
                .Include(u => u.user) // Include the related education data
                .FirstOrDefault(u => u.user_id == userId);

            if (userWithEducation == null)
            {
                return NotFound();
            }

            return userWithEducation;
        }




        // POST: api/Users
        [HttpPost]
        public async Task<ActionResult<User>> CreateUser(User user)
        {
            try
            {
                // Assign a new user ID

                _context.users.Add(user);
                await _context.SaveChangesAsync();

                return CreatedAtAction(nameof(GetUsers), new { id = user.user_id }, user);
            }
            catch (Exception ex)
            {
                return BadRequest($"Error creating user: {ex.InnerException?.Message}");
            }
        }

        [HttpPost("education/{userId}")]
        public async Task<ActionResult<Education>> AddEducationForUser(int userId, [FromBody] Education education)
        {
            var user = await _context.users.FindAsync(userId);
            if (user == null)
            {
                return NotFound("User not found");
            }

            education.user_id = user.user_id; // Set the foreign key

            _context.education.Add(education);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUserEducation", new { userId = user.user_id }, education);
        }

        // Other actions...
    }
}
